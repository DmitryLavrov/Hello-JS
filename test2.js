describe("getWeekDay", function() {
    it("3 января 2014 года - пятница", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 3)), 'ПТ');
    });
  
    it("4 января 2014 года - суббота", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 4)), 'СБ');
    });
  
    it("5 января 2014 года - воскресенье", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 5)), 'ВС');
    });
  
    it("6 января 2014 года - понедельник", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 6)), 'ПН');
    });
  
    it("7 января 2014 года - вторник", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 7)), 'ВТ');
    });
  
    it("8 января 2014 года - среда", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 8)), 'СР');
    });
  
    it("9 января 2014 - четверг", function() {
      assert.equal(getWeekDay(new Date(2014, 0, 9)), 'ЧТ');
    });
  });


  describe("getLocalDay возвращает \"европейский\" день недели", function() {
    it("3 января 2014 года - пятница", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 3)), 5);
    });
  
    it("4 января 2014 года - суббота", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 4)), 6);
    });
  
    it("5 января 2014 года - воскресенье", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 5)), 7);
    });
  
    it("6 января 2014 года - понедельник", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 6)), 1);
    });
  
    it("7 января 2014 года - вторник", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 7)), 2);
    });
  
    it("8 января 2014 года - среда", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 8)), 3);
    });
  
    it("9 января 2014 года - четверг", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 9)), 4);
    });
  });



  describe("getDateAgo", function() {

    it("1 день до 02.01.2015 -> день 1", function() {
      assert.equal(getDateAgo(new Date(2015, 0, 2), 1), 1);
    });
  
  
    it("2 дня до 02.01.2015 -> день 31", function() {
      assert.equal(getDateAgo(new Date(2015, 0, 2), 2), 31);
    });
  
    it("100 дней до 02.01.2015 -> день 24", function() {
      assert.equal(getDateAgo(new Date(2015, 0, 2), 100), 24);
    });
  
    it("365 дней до 02.01.2015 -> день 2", function() {
      assert.equal(getDateAgo(new Date(2015, 0, 2), 365), 2);
    });
  
    it("переданный объект date не модифицируется", function() {
      let date = new Date(2015, 0, 2);
      let dateCopy = new Date(date);
      getDateAgo(dateCopy, 100);
      assert.equal(date.getTime(), dateCopy.getTime());
    });
  
  });


  describe("getLastDayOfMonth", function() {
    it("последнее число 01.01.2012 - 31", function() {
      assert.equal(getLastDayOfMonth(2012, 0), 31);
    });
  
    it("последнее число 01.02.2012 - 29 (високосный год)", function() {
      assert.equal(getLastDayOfMonth(2012, 1), 29);
    });
  
    it("последнее число 01.02.2013 - 28", function() {
      assert.equal(getLastDayOfMonth(2013, 1), 28);
    });
  });


  describe("formatDate", function() {
    it("отображает 1 мс назад как \"прямо сейчас\"", function() {
      assert.equal(formatDate(new Date(new Date - 1)), 'прямо сейчас');
    });
  
    it('"30 секунд назад"', function() {
      assert.equal(formatDate(new Date(new Date - 30 * 1000)), "30 сек. назад");
    });
  
    it('"5 минут назад"', function() {
      assert.equal(formatDate(new Date(new Date - 5 * 60 * 1000)), "5 мин. назад");
    });
  
    it("более поздние даты в виде DD.MM.YY HH:mm", function() {
      assert.equal(formatDate(new Date(2014, 2, 1, 11, 22, 33)), "01.03.14 11:22");
    });
  
  });