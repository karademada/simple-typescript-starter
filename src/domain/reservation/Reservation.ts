// domain/reservation/Reservation.ts
export interface ReservationProps {
  id: string;
  propertyId: string;
  guestId: string;
  hostId: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
}

export class Reservation {
  constructor(private props: ReservationProps) {}

  get durationInDays(): number {
    const diff = +this.props.endDate - +this.props.startDate;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  isCancelable(byUserId: string): boolean {
    return this.props.guestId === byUserId && this.props.status === 'CONFIRMED';
  }

  // ...
}
