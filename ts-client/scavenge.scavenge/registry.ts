import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSubmitScavenge } from "./types/scavenge/scavenge/tx";
import { MsgCommitSolution } from "./types/scavenge/scavenge/tx";
import { MsgRevealSolution } from "./types/scavenge/scavenge/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/scavenge.scavenge.MsgSubmitScavenge", MsgSubmitScavenge],
    ["/scavenge.scavenge.MsgCommitSolution", MsgCommitSolution],
    ["/scavenge.scavenge.MsgRevealSolution", MsgRevealSolution],
    
];

export { msgTypes }