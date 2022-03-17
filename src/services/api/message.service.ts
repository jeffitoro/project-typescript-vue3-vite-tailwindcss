import axiosClient from "@/plugins/axios.plugin";
import type { AxiosResponse } from "axios";
export const messageService = {
  index,
  show,
}

function index(): Promise<AxiosResponse> {
  return axiosClient({
    url: "/messages",
    method: "GET"
  })
}

function show(id: string | string[]): Promise<AxiosResponse> {
  return axiosClient({
    url: `/messages/${id}`,
    method: "GET",
  })
}