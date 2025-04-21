// domain/message/Message.ts
export interface MessageProps {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  sentAt: Date;
  type: 'TEXT' | 'SYSTEM';
}

export class Message {
  constructor(private props: MessageProps) {}

  isFromUser(userId: string): boolean {
    return this.props.senderId === userId;
  }

  isSystemMessage(): boolean {
    return this.props.type === 'SYSTEM';
  }

  get content() {
    return this.props.content;
  }
}
