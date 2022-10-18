export interface Projects {
  id: number;
  name: string;
  title: string;
  image: string;
  link: { code: string; online: string },
  description: string;
  languages: [
    { id: number; desc: string },
    { id: number; desc: string }?,
    { id: number; desc: string }?,
    { id: number; desc: string }?,
    { id: number; desc: string }?
  ];
}
