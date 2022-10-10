import { BigDecimal } from "@graphprotocol/graph-ts";

export const CHAIN = "{{ network }}"
export const ARKEN_DEX_V3 = "{{ initial_fee_address }}";
export const DEFAULT_ARKEN_FEE_WALLET = "{{ initial_fee_address }} "
export const STABLE_COIN_DECIMALS = '{{ stable_coin_decimals }}{{^stable_coin_decimals}}18{{/stable_coin_decimals}}'
export const BIG_DECIMAL_ZERO = BigDecimal.fromString("0");