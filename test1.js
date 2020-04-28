describe("unique", function() {
    it("removes non-unique elements", function() {
      let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
      ];
  
      assert.deepEqual(unique(strings), ["Hare", "Krishna", ":-O"]);
    });
  
    it("does not change the source array", function() {
      let strings = ["Krishna", "Krishna", "Hare", "Hare"];
      unique(strings);
      assert.deepEqual(strings, ["Krishna", "Krishna", "Hare", "Hare"]);
    });
  });


  function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
  }
  
  describe("aclean", function() {
  
    it("returns exactly 1 word from each anagram set", function() {
      let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
      let result = aclean(arr);
      assert.equal(result.length, 3);
  
      assert.equal(intersection(result, ["nap", "PAN"]).length, 1);
      assert.equal(intersection(result, ["teachers", "cheaters", "hectares"]).length, 1);
      assert.equal(intersection(result, ["ear", "era"]).length, 1);
  
    });
  
    it("is case-insensitive", function() {
      let arr = ["era", "EAR"];
      assert.equal(aclean(arr).length, 1);
    });
  
  });


  describe("sumSalaries", function() {
    it("returns sum of salaries", function() {
      let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
  
      assert.equal( sumSalaries(salaries), 650 );
    });
  
    it("returns 0 for the empty object", function() {
      assert.strictEqual( sumSalaries({}), 0);
    });
  });


  describe("count", function() {
    it("counts the number of properties", function() {
      assert.equal( count({a: 1, b: 2}), 2 );
    });
  
    it("returns 0 for an empty object", function() {
      assert.equal( count({}), 0 );
    });
  
    it("ignores symbolic properties", function() {
      assert.equal( count({ [Symbol('id')]: 1 }), 0 );
    });
  });


  describe("topSalary", function() {
    it("returns top-paid person", function() {
      let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
  
      assert.equal( topSalary(salaries), "Pete" );
    });
  
    it("returns null for the empty object", function() {
      assert.isNull( topSalary({}) );
    });
  });