export const KURLY_ITEM_URL = (no: string) => `https://www.kurly.com/goods/${no}`;

export const YOUTUBE = {
  THUMBNAIL: (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
  IFRAME: (id: string) => `https://www.youtube.com/embed/${id}?autoplay=0`,
  LINK: (id: string) => `https://youtu.be/${id}`,
};
