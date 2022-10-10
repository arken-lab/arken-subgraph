import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ArkenApproveUpdated,
  DODOApproveUpdated,
  FeeWalletUpdated,
  ArkenDexV3OwnershipTransferred,
  Swapped,
  SwappedStopLimit,
  UniswapV3FactoryUpdated,
  WETHDfynUpdated,
  WETHUpdated,
  WooFiQuoteTokenUpdated
} from "../generated/ArkenDexV3/ArkenDexV3"

export function createArkenApproveUpdatedEvent(
  newArkenApproveAddress: Address
): ArkenApproveUpdated {
  let arkenApproveUpdatedEvent = changetype<ArkenApproveUpdated>(newMockEvent())

  arkenApproveUpdatedEvent.parameters = new Array()

  arkenApproveUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newArkenApproveAddress",
      ethereum.Value.fromAddress(newArkenApproveAddress)
    )
  )

  return arkenApproveUpdatedEvent
}

export function createDODOApproveUpdatedEvent(
  newDODOApproveAddress: Address
): DODOApproveUpdated {
  let dodoApproveUpdatedEvent = changetype<DODOApproveUpdated>(newMockEvent())

  dodoApproveUpdatedEvent.parameters = new Array()

  dodoApproveUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newDODOApproveAddress",
      ethereum.Value.fromAddress(newDODOApproveAddress)
    )
  )

  return dodoApproveUpdatedEvent
}

export function createFeeWalletUpdatedEvent(
  newFeeWallet: Address
): FeeWalletUpdated {
  let feeWalletUpdatedEvent = changetype<FeeWalletUpdated>(newMockEvent())

  feeWalletUpdatedEvent.parameters = new Array()

  feeWalletUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newFeeWallet",
      ethereum.Value.fromAddress(newFeeWallet)
    )
  )

  return feeWalletUpdatedEvent
}

export function createArkenDexV3OwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): ArkenDexV3OwnershipTransferred {
  let arkenDexV3OwnershipTransferredEvent = changetype<
    ArkenDexV3OwnershipTransferred
  >(newMockEvent())

  arkenDexV3OwnershipTransferredEvent.parameters = new Array()

  arkenDexV3OwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  arkenDexV3OwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return arkenDexV3OwnershipTransferredEvent
}

export function createSwappedEvent(
  srcToken: Address,
  dstToken: Address,
  amountIn: BigInt,
  returnAmount: BigInt
): Swapped {
  let swappedEvent = changetype<Swapped>(newMockEvent())

  swappedEvent.parameters = new Array()

  swappedEvent.parameters.push(
    new ethereum.EventParam("srcToken", ethereum.Value.fromAddress(srcToken))
  )
  swappedEvent.parameters.push(
    new ethereum.EventParam("dstToken", ethereum.Value.fromAddress(dstToken))
  )
  swappedEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  swappedEvent.parameters.push(
    new ethereum.EventParam(
      "returnAmount",
      ethereum.Value.fromUnsignedBigInt(returnAmount)
    )
  )

  return swappedEvent
}

export function createSwappedStopLimitEvent(
  srcToken: Address,
  dstToken: Address,
  amountIn: BigInt,
  returnAmount: BigInt
): SwappedStopLimit {
  let swappedStopLimitEvent = changetype<SwappedStopLimit>(newMockEvent())

  swappedStopLimitEvent.parameters = new Array()

  swappedStopLimitEvent.parameters.push(
    new ethereum.EventParam("srcToken", ethereum.Value.fromAddress(srcToken))
  )
  swappedStopLimitEvent.parameters.push(
    new ethereum.EventParam("dstToken", ethereum.Value.fromAddress(dstToken))
  )
  swappedStopLimitEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  swappedStopLimitEvent.parameters.push(
    new ethereum.EventParam(
      "returnAmount",
      ethereum.Value.fromUnsignedBigInt(returnAmount)
    )
  )

  return swappedStopLimitEvent
}

export function createUniswapV3FactoryUpdatedEvent(
  newUv3Factory: Address
): UniswapV3FactoryUpdated {
  let uniswapV3FactoryUpdatedEvent = changetype<UniswapV3FactoryUpdated>(
    newMockEvent()
  )

  uniswapV3FactoryUpdatedEvent.parameters = new Array()

  uniswapV3FactoryUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newUv3Factory",
      ethereum.Value.fromAddress(newUv3Factory)
    )
  )

  return uniswapV3FactoryUpdatedEvent
}

export function createWETHDfynUpdatedEvent(
  newWETHDfyn: Address
): WETHDfynUpdated {
  let wethDfynUpdatedEvent = changetype<WETHDfynUpdated>(newMockEvent())

  wethDfynUpdatedEvent.parameters = new Array()

  wethDfynUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newWETHDfyn",
      ethereum.Value.fromAddress(newWETHDfyn)
    )
  )

  return wethDfynUpdatedEvent
}

export function createWETHUpdatedEvent(newWETH: Address): WETHUpdated {
  let wethUpdatedEvent = changetype<WETHUpdated>(newMockEvent())

  wethUpdatedEvent.parameters = new Array()

  wethUpdatedEvent.parameters.push(
    new ethereum.EventParam("newWETH", ethereum.Value.fromAddress(newWETH))
  )

  return wethUpdatedEvent
}

export function createWooFiQuoteTokenUpdatedEvent(
  newWooFiQuoteTokenAddress: Address
): WooFiQuoteTokenUpdated {
  let wooFiQuoteTokenUpdatedEvent = changetype<WooFiQuoteTokenUpdated>(
    newMockEvent()
  )

  wooFiQuoteTokenUpdatedEvent.parameters = new Array()

  wooFiQuoteTokenUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newWooFiQuoteTokenAddress",
      ethereum.Value.fromAddress(newWooFiQuoteTokenAddress)
    )
  )

  return wooFiQuoteTokenUpdatedEvent
}
