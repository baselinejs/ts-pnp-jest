export class Ticket {
  public readonly person: string;
  public readonly ticketNumber: number;
  public readonly ticketTime: Date;
  public readonly estimatedWait: number;

  constructor(
    person: string,
    ticketNumber: number,
    ticketTime: Date,
    estimatedWait: number
  ) {
    this.person = person;
    this.ticketNumber = ticketNumber;
    this.ticketTime = ticketTime;
    this.estimatedWait = estimatedWait;
  }
}
