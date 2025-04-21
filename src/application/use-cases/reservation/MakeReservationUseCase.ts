// application/use-cases/reservation/MakeReservationUseCase.ts
class MakeReservationUseCase {
  constructor(
    private reservationRepo: IReservationRepo,
    private propertyRepo: IPropertyRepo,
  ) {}

  async execute(input: {
    propertyId: string;
    guestId: string;
    startDate: Date;
    endDate: Date;
  }) {
    // 1. Vérifier si le bien existe et est disponible
    const property = await this.propertyRepo.findById(input.propertyId);
    if (!property) throw new Error('Property not found');

    const isAvailable = await this.reservationRepo.isAvailable(
      input.propertyId,
      input.startDate,
      input.endDate,
    );
    if (!isAvailable) throw new Error('Not available for those dates');

    // 2. Calcul prix total
    const days =
      (input.endDate.getTime() - input.startDate.getTime()) /
      (1000 * 60 * 60 * 24);
    const totalPrice = property.pricePerNight * days;

    // 3. Créer la réservation
    const reservation = new Reservation({
      id: uuid(),
      propertyId: input.propertyId,
      guestId: input.guestId,
      hostId: property.ownerId,
      startDate: input.startDate,
      endDate: input.endDate,
      totalPrice,
      status: 'PENDING',
    });

    await this.reservationRepo.save(reservation);

    return reservation;
  }
}
