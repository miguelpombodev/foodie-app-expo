export class NumberUtils {
  public static formatCurrencyToRelatedCountry(
    value: number,
    country: string = "pt-BR",
    currencyFormat: string = "BRL"
  ) {
    const formatterHandler = new Intl.NumberFormat(country, {
      style: "currency",
      currency: currencyFormat,
    });

    return formatterHandler.format(value);
  }
}
