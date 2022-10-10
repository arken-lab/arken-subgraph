import { FeeWalletUpdated as FeeWalletUpdatedEvent } from "../generated/ArkenDexV3/ArkenDexV3";
import { FeeWallet, FeeWalletUpdated } from "../generated/schema";
import { ARKEN_DEX_V3 } from "../const";

export function handleFeeWalletUpdated(event: FeeWalletUpdatedEvent): void {
  let entity = new FeeWalletUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.newFeeWallet = event.params.newFeeWallet;
  entity.save();

  let feeWallet = FeeWallet.load(ARKEN_DEX_V3);

  if (feeWallet === null) {
    feeWallet = new FeeWallet(ARKEN_DEX_V3);
    feeWallet.id = ARKEN_DEX_V3;
    feeWallet.feeWalletAddress = event.params.newFeeWallet;
  }

  feeWallet.save();
}
