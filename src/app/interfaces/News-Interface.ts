export interface News {
  _id:         String;
  title:       String;
  description: String;
  date:        Date;
  image:       String;
  tags:        String[];
  createdAt:   Date;
  updatedAt:   Date;
  __v:         Number;
}
