export class Content {
  private readonly content: string;

  constructor(content: string) {
    if (!this.isContentLengthValid(content)) {
      throw new Error('Content length is invalid');
    }
    this.content = content;
  }

  public get value() {
    return this.content;
  }

  private isContentLengthValid(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }
}
