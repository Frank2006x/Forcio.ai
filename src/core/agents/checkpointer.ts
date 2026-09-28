import { MemorySaver } from "@langchain/langgraph";

// In-memory checkpointer for session thread state (no persistent DB).
export const checkpointer = new MemorySaver();
