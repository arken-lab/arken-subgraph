import {
  ERC20,
  Approval,
  OwnershipTransferred,
  Transfer,
} from "../generated/ERC20/ERC20";

import { Address, BigDecimal, BigInt, log } from "@graphprotocol/graph-ts";

import { DayData, FeeWallet, Revenue } from "../generated/schema";
import {
  ARKEN_DEX_V3,
  BIG_DECIMAL_ZERO,
  DEFAULT_ARKEN_FEE_WALLET,
  STABLE_COIN_DECIMALS,
} from "../const";

export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
  let bd = BigDecimal.fromString("1");
  for (
    let i = BigInt.fromI32(0);
    i.lt(decimals as BigInt);
    i = i.plus(BigInt.fromI32(1))
  ) {
    bd = bd.times(BigDecimal.fromString("10"));
  }
  return bd;
}

export function convertTokenToDecimal(
  tokenAmount: BigInt,
  exchangeDecimals: BigInt
): BigDecimal {
  if (exchangeDecimals == BigInt.fromI32(0)) {
    return tokenAmount.toBigDecimal();
  }
  return tokenAmount.toBigDecimal().div(exponentToBigDecimal(exchangeDecimals));
}



export function handleTransfer(event: Transfer): void {

  let feeWallet = FeeWallet.load(ARKEN_DEX_V3);
  if (feeWallet === null) {
    feeWallet = new FeeWallet(ARKEN_DEX_V3);
    feeWallet.feeWalletAddress = Address.fromString(DEFAULT_ARKEN_FEE_WALLET);
    feeWallet.save();
  }
  const date = event.block.timestamp.toI32() / 86400;

  if (event.params.from.notEqual(Address.fromBytes(feeWallet.feeWalletAddress)))
    return;

  let revenue = Revenue.load(event.block.number.toString());

  if (revenue === null) {
    revenue = new Revenue(event.block.number.toString());
    revenue.amountUsd = BIG_DECIMAL_ZERO;
    revenue.date = date * 86400;
  }

  revenue.amountUsd = revenue.amountUsd.plus(
    convertTokenToDecimal(event.params.value, BigInt.fromString(STABLE_COIN_DECIMALS))
  );

  revenue.save();

  let dayData = DayData.load(date.toString());

  if (dayData === null) {
    dayData = new DayData(date.toString());
    dayData.date = date;
    dayData.totalAmountUsd = BIG_DECIMAL_ZERO;
  }

  dayData.totalAmountUsd = dayData.totalAmountUsd.plus(
    convertTokenToDecimal(event.params.value, BigInt.fromString(STABLE_COIN_DECIMALS))
  );

  dayData.save();
}
