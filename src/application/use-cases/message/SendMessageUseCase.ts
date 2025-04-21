// application/use-cases/message/SendMessageUseCase.ts
class SendMessageUseCase {
  constructor(private messageRepo: IMessageRepo) {}

  async execute(input: {
    senderId: string;
    receiverId: string;
    content: string;
  }) {
    const message = new Message({
      id: uuid(),
      senderId: input.senderId,
      receiverId: input.receiverId,
      content: input.content,
      sentAt: new Date(),
      type: 'TEXT',
    });

    await this.messageRepo.save(message);
    return message;
  }
}
