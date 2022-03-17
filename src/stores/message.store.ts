import { defineStore } from "pinia"
import { messageService } from "@/services/api";
import type { MessageDetail, Message } from "@/types";


export const useMessageStore = defineStore("message", {
  state: () => ({
    messages: [],
    message: null
  }),
  getters: {
    getMessages(state): Message[] {
      return state.messages
    },
    getMessage(state): MessageDetail | null {
      return state.message
    }
  },
  actions: {
    async indexMessages(): Promise<void> {
      const { data } = await messageService.index()
      this.messages = data
    },
    async showMessage(id: string | string[]): Promise<MessageDetail> {
      const { data } = await messageService.show(id)
      this.message = data
      return data
    }
  }
})