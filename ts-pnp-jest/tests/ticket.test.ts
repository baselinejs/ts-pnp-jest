import { Ticket } from '../index';

describe('Valid Ticket', () => {
  let ticket: Ticket;

  beforeEach(() => {
    ticket = new Ticket('Dean', 1, new Date(), 15);
  });

  it('Should create new ticket', () => {
    expect(ticket.person).toEqual('Dean');
    expect(ticket.ticketNumber).toEqual(1);
  });
});
