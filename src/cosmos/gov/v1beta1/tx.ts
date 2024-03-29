// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v0.4.0
//   protoc        v3.21.7

import { Writer, Reader, Protobuf } from "as-proto";
import { google } from "../../../google";
import { base } from "../../base";
import { VoteOption, WeightedVoteOption } from "./gov";

export class MsgSubmitProposal {
  static encode(message: MsgSubmitProposal, writer: Writer): void {
    const content = message.content;
    if (content !== null) {
      writer.uint32(10);
      writer.fork();
      google.protobuf.Any.encode(content, writer);
      writer.ldelim();
    }

    const initialDeposit = message.initialDeposit;
    for (let i = 0; i < initialDeposit.length; ++i) {
      writer.uint32(18);
      writer.fork();
      base.v1beta1.Coin.encode(initialDeposit[i], writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.string(message.proposer);
  }

  static decode(reader: Reader, length: i32): MsgSubmitProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSubmitProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.initialDeposit.push(
            base.v1beta1.Coin.decode(reader, reader.uint32())
          );
          break;

        case 3:
          message.proposer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  content: google.protobuf.Any | null;
  initialDeposit: Array<base.v1beta1.Coin>;
  proposer: string;

  constructor(
    content: google.protobuf.Any | null = null,
    initialDeposit: Array<base.v1beta1.Coin> = [],
    proposer: string = ""
  ) {
    this.content = content;
    this.initialDeposit = initialDeposit;
    this.proposer = proposer;
  }
}

export function encodeMsgSubmitProposal(
  message: MsgSubmitProposal
): Uint8Array {
  return Protobuf.encode(message, MsgSubmitProposal.encode);
}

export function decodeMsgSubmitProposal(buffer: Uint8Array): MsgSubmitProposal {
  return Protobuf.decode<MsgSubmitProposal>(buffer, MsgSubmitProposal.decode);
}

@unmanaged
export class MsgSubmitProposalResponse {
  static encode(message: MsgSubmitProposalResponse, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.proposalId);
  }

  static decode(reader: Reader, length: i32): MsgSubmitProposalResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSubmitProposalResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  proposalId: u64;

  constructor(proposalId: u64 = 0) {
    this.proposalId = proposalId;
  }
}

export function encodeMsgSubmitProposalResponse(
  message: MsgSubmitProposalResponse
): Uint8Array {
  return Protobuf.encode(message, MsgSubmitProposalResponse.encode);
}

export function decodeMsgSubmitProposalResponse(
  buffer: Uint8Array
): MsgSubmitProposalResponse {
  return Protobuf.decode<MsgSubmitProposalResponse>(
    buffer,
    MsgSubmitProposalResponse.decode
  );
}

export class MsgVote {
  static encode(message: MsgVote, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.proposalId);

    writer.uint32(18);
    writer.string(message.voter);

    writer.uint32(24);
    writer.int32(message.option);
  }

  static decode(reader: Reader, length: i32): MsgVote {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgVote();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.option = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  proposalId: u64;
  voter: string;
  option: VoteOption;

  constructor(proposalId: u64 = 0, voter: string = "", option: VoteOption = 0) {
    this.proposalId = proposalId;
    this.voter = voter;
    this.option = option;
  }
}

export function encodeMsgVote(message: MsgVote): Uint8Array {
  return Protobuf.encode(message, MsgVote.encode);
}

export function decodeMsgVote(buffer: Uint8Array): MsgVote {
  return Protobuf.decode<MsgVote>(buffer, MsgVote.decode);
}

@unmanaged
export class MsgVoteResponse {
  static encode(message: MsgVoteResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgVoteResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgVoteResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function encodeMsgVoteResponse(message: MsgVoteResponse): Uint8Array {
  return Protobuf.encode(message, MsgVoteResponse.encode);
}

export function decodeMsgVoteResponse(buffer: Uint8Array): MsgVoteResponse {
  return Protobuf.decode<MsgVoteResponse>(buffer, MsgVoteResponse.decode);
}

export class MsgVoteWeighted {
  static encode(message: MsgVoteWeighted, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.proposalId);

    writer.uint32(18);
    writer.string(message.voter);

    const options = message.options;
    for (let i = 0; i < options.length; ++i) {
      writer.uint32(26);
      writer.fork();
      WeightedVoteOption.encode(options[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgVoteWeighted {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgVoteWeighted();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.options.push(
            WeightedVoteOption.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  proposalId: u64;
  voter: string;
  options: Array<WeightedVoteOption>;

  constructor(
    proposalId: u64 = 0,
    voter: string = "",
    options: Array<WeightedVoteOption> = []
  ) {
    this.proposalId = proposalId;
    this.voter = voter;
    this.options = options;
  }
}

export function encodeMsgVoteWeighted(message: MsgVoteWeighted): Uint8Array {
  return Protobuf.encode(message, MsgVoteWeighted.encode);
}

export function decodeMsgVoteWeighted(buffer: Uint8Array): MsgVoteWeighted {
  return Protobuf.decode<MsgVoteWeighted>(buffer, MsgVoteWeighted.decode);
}

@unmanaged
export class MsgVoteWeightedResponse {
  static encode(message: MsgVoteWeightedResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgVoteWeightedResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgVoteWeightedResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function encodeMsgVoteWeightedResponse(
  message: MsgVoteWeightedResponse
): Uint8Array {
  return Protobuf.encode(message, MsgVoteWeightedResponse.encode);
}

export function decodeMsgVoteWeightedResponse(
  buffer: Uint8Array
): MsgVoteWeightedResponse {
  return Protobuf.decode<MsgVoteWeightedResponse>(
    buffer,
    MsgVoteWeightedResponse.decode
  );
}

export class MsgDeposit {
  static encode(message: MsgDeposit, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.proposalId);

    writer.uint32(18);
    writer.string(message.depositor);

    const amount = message.amount;
    for (let i = 0; i < amount.length; ++i) {
      writer.uint32(26);
      writer.fork();
      base.v1beta1.Coin.encode(amount[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgDeposit {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgDeposit();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;

        case 2:
          message.depositor = reader.string();
          break;

        case 3:
          message.amount.push(
            base.v1beta1.Coin.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  proposalId: u64;
  depositor: string;
  amount: Array<base.v1beta1.Coin>;

  constructor(
    proposalId: u64 = 0,
    depositor: string = "",
    amount: Array<base.v1beta1.Coin> = []
  ) {
    this.proposalId = proposalId;
    this.depositor = depositor;
    this.amount = amount;
  }
}

export function encodeMsgDeposit(message: MsgDeposit): Uint8Array {
  return Protobuf.encode(message, MsgDeposit.encode);
}

export function decodeMsgDeposit(buffer: Uint8Array): MsgDeposit {
  return Protobuf.decode<MsgDeposit>(buffer, MsgDeposit.decode);
}

@unmanaged
export class MsgDepositResponse {
  static encode(message: MsgDepositResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgDepositResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgDepositResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function encodeMsgDepositResponse(
  message: MsgDepositResponse
): Uint8Array {
  return Protobuf.encode(message, MsgDepositResponse.encode);
}

export function decodeMsgDepositResponse(
  buffer: Uint8Array
): MsgDepositResponse {
  return Protobuf.decode<MsgDepositResponse>(buffer, MsgDepositResponse.decode);
}
