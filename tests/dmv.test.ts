import { Dmv, Ticket } from '../index';

describe('Dmv', () => {
  let richlandCounty: Dmv;
  let deansTicket: Ticket;
  let ricksTicket: Ticket;
  let pennysTicket: Ticket;
  let jacksTicket: Ticket;

  beforeEach(() => {
    richlandCounty = new Dmv('Richland County');
    deansTicket = richlandCounty.issueTicket('Dean');
    ricksTicket = richlandCounty.issueTicket('Rick');
    pennysTicket = richlandCounty.issueTicket('Penny');
    jacksTicket = richlandCounty.issueTicket('Jack');
  });

  it('Deans Ticket should be ticket 1', () => {
    expect(deansTicket.ticketNumber).toEqual(1);
  });

  it('Pennys Ticket should be ticket 3', () => {
    expect(pennysTicket.ticketNumber).toEqual(3);
  });

  it('Jacks Ticket should be ticket 4', () => {
    expect(jacksTicket.ticketNumber).toEqual(4);
    expect(jacksTicket.estimatedWait).toEqual(13);
  });

  it('Jacks Ticket should be ticket 4', () => {
    //expect(richlandCounty.serviceNextTicket().serviceNextTicket()).toEqual(4);
  });
});
