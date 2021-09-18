import {get} from "@/http/service.js";

export const getNewsList = () => {
  return get('/api/news/list')
}