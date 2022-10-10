import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ArkenApproveUpdated } from "../generated/schema"
import { ArkenApproveUpdated as ArkenApproveUpdatedEvent } from "../generated/ArkenDexV3/ArkenDexV3"
import { handleArkenApproveUpdated } from "../src/arken-dex-v-3"
import { createArkenApproveUpdatedEvent } from "./arken-dex-v-3-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let newArkenApproveAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newArkenApproveUpdatedEvent = createArkenApproveUpdatedEvent(
      newArkenApproveAddress
    )
    handleArkenApproveUpdated(newArkenApproveUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ArkenApproveUpdated created and stored", () => {
    assert.entityCount("ArkenApproveUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ArkenApproveUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newArkenApproveAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
