export class Cat {
  _id: string;
  mimetype: 'image/jpeg';
  size: number;
  tags: string[];

  constructor(_id: string, size: number, tags: string[]) {
    this._id = _id;
    this.mimetype = 'image/jpeg';
    this.size = size;
    this.tags = tags;
  }

}
