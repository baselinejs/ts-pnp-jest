import { Ticket } from './ticket';

export class Dmv {
  private readonly name: string;
  private nextTicket: number;
  private readonly ticketsInLine: Array<Ticket>;
  private readonly ticketMap: Map<number, Ticket>;

  constructor(name: string) {
    this.name = name;
    this.nextTicket = 1;
    this.ticketsInLine = [];
    this.ticketMap = new Map();
  }

  fibonacci(count: number): number {
    const fib = Array<number>(0, 1);

    for (let i: number = fib.length; i < count; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[fib.length - 1];
  }

  issueTicket(person: string): Ticket {
    const ticketTime: Date = new Date();
    const linePosition = this.ticketsInLine.length;
    const estimatedWait = this.fibonacci(linePosition + 5);
    const ticket = new Ticket(
      person,
      this.nextTicket,
      ticketTime,
      estimatedWait
    );
    this.ticketsInLine.push(ticket);
    this.ticketMap[this.nextTicket] = ticket;
    this.nextTicket += 1;
    return ticket;
  }

  serviceNextTicket(): Promise<any> {
    return Promise.resolve();
  }

  rissueTicket(person: string, positionInLine: number): string {
    const ticketNumber: number = this.fibonacci(positionInLine * 2);
    const ticketTime: Date = new Date();
    const ticketIssuedAt: string = ticketTime.toLocaleString();
    let message = `${this.name}: Welcome ${person}. Your ticket details:`;
    message += '\n    Ticket Number:' + ticketNumber;
    message += '\n    Ticket Time:' + ticketIssuedAt;
    message += '\n    People Ahead of You:' + positionInLine;
    return message;
  }
}
