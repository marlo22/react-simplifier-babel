const COUNTER_IDS = { MAIN: 'counter', NESTED: 'nestedCounter' };

const resetCounter = (counterId) => $(`#${counterId} [name="reset"]`).click();

const setCounterValue = (counterId, counterValue) => $(`#${counterId} [name="counter"]`).setValue(counterValue);

const setOperator = (counterId, operator) => $(`#${counterId} [name="operator"]`).setValue(operator);

const setOperatorValue = (counterId, operatorValue) => $(`#${counterId} [name="value"]`).setValue(operatorValue);

const clickCalculateButton = (counterId) => $(`#${counterId} [name="calculate"]`).click();

const getCounterElement = (counterId) => $(`#${counterId} [name="counter"]`);

describe('assignment operators', () => {
  beforeAll(async () => {
    await browser.url(`http://localhost:3000`);
  });

  beforeEach(async () => {
    await resetCounter(COUNTER_IDS.MAIN);
    await resetCounter(COUNTER_IDS.NESTED);
  });

  describe('+=', () => {
    const operator = '+=';

    it('#counter', async () => {
      const counterId = COUNTER_IDS.MAIN;
      await setOperator(counterId, operator);
      await setOperatorValue(counterId, 1);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('1');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('2');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('3');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('4');
    });

    it('#nestedCounter', async () => {
      const counterId = COUNTER_IDS.NESTED;
      await setOperator(counterId, operator);
      await setOperatorValue(counterId, 2);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('4');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('6');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('8');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('10');
    });
  });

  describe('-=', () => {
    const operator = '-=';

    it('#counter', async () => {
      const counterId = COUNTER_IDS.MAIN;
      await setOperator(counterId, operator);
      await setOperatorValue(counterId, 1);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('-1');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('-2');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('-3');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('-4');

      await resetCounter(counterId);
    });

    it('#nestedCounter', async () => {
      const counterId = COUNTER_IDS.NESTED;
      await setOperator(counterId, operator);
      await setOperatorValue(counterId, 2);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('0');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('-2');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('-4');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('-6');

      await resetCounter(counterId);
    });
  });

  describe('*=', () => {
    const operator = '*=';

    it('#counter', async () => {
      const counterId = COUNTER_IDS.MAIN;
      await setCounterValue(counterId, 2);
      await setOperator(counterId, operator);
      await setOperatorValue(counterId, 2);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('4');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('8');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('16');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('32');

      await resetCounter(counterId);
    });

    it('#nestedCounter', async () => {
      const counterId = COUNTER_IDS.NESTED;
      await setCounterValue(counterId, -2);
      await setOperator(counterId, operator);
      await setOperatorValue(counterId, 2);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('-4');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('-8');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('-16');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('-32');

      await resetCounter(counterId);
    });
  });

  describe('/=', () => {
    const operator = '/=';

    it('#counter', async () => {
      const counterId = COUNTER_IDS.MAIN;
      await setCounterValue(counterId, 1000000);
      await setOperator(counterId, operator);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('500000');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('250000');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('125000');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('62500');

      await resetCounter(counterId);
    });

    it('#nestedCounter', async () => {
      const counterId = COUNTER_IDS.NESTED;
      await setCounterValue(counterId, -1000000);
      await setOperator(counterId, operator);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('-500000');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('-250000');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('-125000');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('-62500');

      await resetCounter(counterId);
    });
  });

  describe('**', () => {
    const operator = '**';

    it('#counter', async () => {
      const counterId = COUNTER_IDS.MAIN;
      await setCounterValue(counterId, 2);
      await setOperator(counterId, operator);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('4');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('16');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('256');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('65536');

      await resetCounter(counterId);
    });

    it('#nestedCounter', async () => {
      const counterId = COUNTER_IDS.NESTED;
      await setCounterValue(counterId, 4);
      await setOperator(counterId, operator);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('16');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('256');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('65536');
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('4294967296');

      await resetCounter(counterId);
    });
  });

  describe('%=', () => {
    const operator = '%=';

    it('#counter', async () => {
      const counterId = COUNTER_IDS.MAIN;
      await setCounterValue(counterId, 9);
      await setOperator(counterId, operator);
      await setOperatorValue(counterId, 2);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('1');

      await resetCounter(counterId);
    });

    it('#nestedCounter', async () => {
      const counterId = COUNTER_IDS.NESTED;
      await setCounterValue(counterId, 11);
      await setOperator(counterId, operator);
      await setOperatorValue(counterId, 3);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('2');

      await resetCounter(counterId);
    });
  });

  describe('&=', () => {
    const operator = '&=';

    it('#counter', async () => {
      const counterId = COUNTER_IDS.MAIN;
      await setCounterValue(counterId, 5);
      await setOperator(counterId, operator);
      await setOperatorValue(counterId, 3);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('1');

      await resetCounter(counterId);
    });

    it('#nestedCounter', async () => {
      const counterId = COUNTER_IDS.NESTED;
      await setCounterValue(counterId, -5);
      await setOperator(counterId, operator);
      await setOperatorValue(counterId, 3);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('3');

      await resetCounter(counterId);
    });
  });

  describe('|=', () => {
    const operator = '|=';

    it('#counter', async () => {
      const counterId = COUNTER_IDS.MAIN;
      await setCounterValue(counterId, 5);
      await setOperator(counterId, operator);
      await setOperatorValue(counterId, 3);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('7');

      await resetCounter(counterId);
    });

    it('#nestedCounter', async () => {
      const counterId = COUNTER_IDS.NESTED;
      await setCounterValue(counterId, 5);
      await setOperator(counterId, operator);
      await setOperatorValue(counterId, 7);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('7');

      await resetCounter(counterId);
    });
  });

  describe('^=', () => {
    const operator = '^=';

    it('#counter', async () => {
      const counterId = COUNTER_IDS.MAIN;
      await setCounterValue(counterId, 5);
      await setOperator(counterId, operator);
      await setOperatorValue(counterId, 3);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('6');

      await resetCounter(counterId);
    });

    it('#nestedCounter', async () => {
      const counterId = COUNTER_IDS.NESTED;
      await setCounterValue(counterId, 11);
      await setOperator(counterId, operator);
      await setOperatorValue(counterId, 6);
  
      const counter = getCounterElement(counterId);
      await clickCalculateButton(counterId);
      await expect(counter).toHaveValue('13');

      await resetCounter(counterId);
    });
  });
});
