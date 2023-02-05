export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Ошибка 1'],
      [2, 'Ошибка 2'],
      [3, 'Ошибка 3'],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
