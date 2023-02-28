function Company(name, salary) {
  const staff = { name, income: 0 };
  Company.addStaff(staff);

  this.income = function (val) {
    staff.income += val - salary;
    Company.store.money += val - salary;
  };
  this.spend = function (val) {
    staff.income -= val;
    Company.store.money -= val;
  };
}

Company.store = {
  staffList: [],
  countStaff: 0,
  money: 0,
};

Company.addStaff = function (staff) {
  Company.store.staffList.push(staff);
  Company.store.countStaff++;
};

Company.getLeaders = function () {
  let max = Company.store.staffList[0].income;
  let result = Company.store.staffList.reduce((acc, staff) => {
    if (staff.income > max) {
      max = staff.income;
      return [staff];
    }
    if (staff.income === max) {
      return [...acc, staff];
    }
    return acc;
  }, []);
  return result;
};