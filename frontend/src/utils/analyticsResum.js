
export function getMonthlyResum(monthly) {
  var monthlyResum = [];
  var monthlyTotalRentCount = 0;
  var monthlyTopIndex = 0;
  if (monthly && (monthly.length > 0)) {
    // Grouping by month
    monthly.forEach(function (a) {
      if (!this[a.created_at__month]) {
          this[a.created_at__month] = { created_at__month: a.created_at__month, rental_count: 0 };
          monthlyResum.push(this[a.created_at__month]);
      }
      this[a.created_at__month].rental_count += a.rental_count;
      monthlyTotalRentCount += a.rental_count;
    }, Object.create(null));

    // Sort by month
    monthlyResum.sort((a, b) => {
      if (a.created_at__month > b.created_at__month)
        return -1;
      if (a.created_at__month < b.created_at__month)
        return 1;
      return 0;
    });

    // Get top item.
    for (var i = 0; i < monthlyResum.length; i ++) {
      if (monthlyResum[monthlyTopIndex].rental_count < monthlyResum[i].rental_count)
        monthlyTopIndex = i;
    }
  }
  return {monthlyResum, monthlyTotalRentCount, monthlyTopIndex};
}

export function getWeeklyResum(weekly) {
  var weeklyResum = [];
  var weeklyTotalRentCount = 0;
  var weeklyTopIndex = 0;
  if (weekly && (weekly.length > 0)) {
    // Grouping by week
    weekly.forEach(function (a) {
      if (!this[a.created_at__week]) {
          this[a.created_at__week] = { created_at__week: a.created_at__week, rental_count: 0 };
          weeklyResum.push(this[a.created_at__week]);
      }
      this[a.created_at__week].rental_count += a.rental_count;
      weeklyTotalRentCount += a.rental_count;
    }, Object.create(null));

    // Sort by month
    weeklyResum.sort((a, b) => {
      if (a.created_at__week > b.created_at__week)
        return -1;
      if (a.created_at__week < b.created_at__week)
        return 1;
      return 0;
    });

    // Get top item.
    for (var i = 0; i < weeklyResum.length; i ++) {
      if (weeklyResum[weeklyTopIndex].rental_count < weeklyResum[i].rental_count)
        weeklyTopIndex = i;
    }
  }
  return {weeklyResum, weeklyTotalRentCount, weeklyTopIndex};
}

export function getTotalResum(total) {
  var totalResum = [];
  var totalRentCount = 0;
  var totalTopIndex = 0;
  if (total && (total.length > 0)) {
    // Grouping by station_sn
    total.forEach(function (a) {
      if (!this[a.station_sn]) {
          this[a.station_sn] = { station_sn: a.station_sn, rental_count: 0 };
          totalResum.push(this[a.station_sn]);
      }
      this[a.station_sn].rental_count += a.rental_count;
      totalRentCount += a.rental_count;
    }, Object.create(null));

    // Sort by rent_count
    totalResum.sort((a, b) => {
      if (a.rental_count > b.rental_count)
        return -1;
      if (a.rental_count < b.rental_count)
        return 1;
      return 0;
    });

    // Get top item.
    for (var i = 0; i < totalResum.length; i ++) {
      if (totalResum[totalTopIndex].rental_count < totalResum[i].rental_count)
        totalTopIndex = i;
    }
  }
  return {totalResum, totalRentCount, totalTopIndex};
}

export function getCommonResum(array, group_key, value_key) {
  var resum = [];
  var totalCount = 0;
  var topIndex = 0;
  if (array && (array.length > 0)) {
    // Grouping by group_key
    array.forEach(function (a) {
      if (!this[a[group_key]]) {
          this[a[group_key]] = { [group_key]: a[group_key], [value_key]: 0 };
          resum.push(this[a[group_key]]);
      }
      this[a[group_key]][value_key] += a[value_key];
      totalCount += a[value_key];
    }, Object.create(null));

    // Sort by rent_count
    resum.sort((a, b) => {
      if (a[value_key] > b[value_key])
        return -1;
      if (a[value_key] < b[value_key])
        return 1;
      return 0;
    });

    // Get top item.
    for (var i = 0; i < resum.length; i ++) {
      if (resum[topIndex][value_key] < resum[i][value_key])
        topIndex = i;
    }
  }
  return {resum, totalCount, topIndex};
}

export function getMonthlyResumByStationType(monthly) {
  var monthlyResum = [];
  var monthlyTotalRentCount = 0;
  var monthlyTopIndex = 0;
  if (monthly && (monthly.length > 0)) {
    // Grouping by month and slot_total
    for(var i = 0; i < monthly.length; i++) {
      var item = monthly[i];
      var searchedIndex = -1;
      var searched = monthlyResum.find((e, index) => {
        if((e.created_at__month === item.created_at__month) && (e.slot_total ===item.slot_total)) {
          searchedIndex = index;
          return i;
        }
      });
      
      if(searchedIndex >= 0) {
        monthlyResum[searchedIndex].rental_count += item.rental_count;
      } else {
        monthlyResum.push(item);
      }

      monthlyTotalRentCount += item.rental_count;
    }

    // Sort by month
    monthlyResum.sort((a, b) => {
      if (a.created_at__month > b.created_at__month)
        return -1;
      if (a.created_at__month < b.created_at__month)
        return 1;
      return 0;
    });

    // Get top item.
    for (var i = 0; i < monthlyResum.length; i ++) {
      if (monthlyResum[monthlyTopIndex].rental_count < monthlyResum[i].rental_count)
        monthlyTopIndex = i;
    }
  }
  return {monthlyResum, monthlyTotalRentCount, monthlyTopIndex};
}

export function getWeeklyResumByStationType(weekly) {
  var weeklyResum = [];
  var weeklyTotalRentCount = 0;
  var weeklyTopIndex = 0;
  if (weekly && (weekly.length > 0)) {
    // Grouping by week and slot_total
    for(var i = 0; i < weekly.length; i++) {
      var item = weekly[i];
      var searchedIndex = -1;
      var searched =weeklyResum.find((e, index) => {
        if((e.created_at__week === item.created_at__week) && (e.slot_total ===item.slot_total)) {
          searchedIndex = index;
          return i;
        }
      });
      
      if(searchedIndex >= 0) {
        weeklyResum[searchedIndex].rental_count += item.rental_count;
      } else {
        weeklyResum.push(item);
      }

      weeklyTotalRentCount += item.rental_count;
    }

    // Sort by week
    weeklyResum.sort((a, b) => {
      if (a.created_at__week > b.created_at__week)
        return -1;
      if (a.created_at__week < b.created_at__week)
        return 1;
      return 0;
    });

    // Get top item.
    for (var i = 0; i < weeklyResum.length; i ++) {
      if (weeklyResum[weeklyTopIndex].rental_count < weeklyResum[i].rental_count)
      weeklyTopIndex = i;
    }
  }
  return {weeklyResum, weeklyTotalRentCount, weeklyTopIndex};
}