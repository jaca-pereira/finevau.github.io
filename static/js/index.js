window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Navbar burger toggle
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // Leaderboard Table Sorting
    var sortDirection = {};

    $('.leaderboard-table th.sortable').on('click', function() {
      var column = $(this).data('sort');
      var $table = $(this).closest('table');
      var $tbody = $table.find('tbody');
      var rows = $tbody.find('tr').toArray();

      // Toggle sort direction
      if (!sortDirection[column] || sortDirection[column] === 'desc') {
        sortDirection[column] = 'asc';
      } else {
        sortDirection[column] = 'desc';
      }

      // Remove all sort indicators
      $table.find('th').removeClass('sorted-asc sorted-desc');

      // Add sort indicator to current column
      $(this).addClass('sorted-' + sortDirection[column]);

      // Get column index
      var colIndex = $(this).index();

      // Sort rows
      rows.sort(function(a, b) {
        var aVal = $(a).find('td').eq(colIndex).text().trim();
        var bVal = $(b).find('td').eq(colIndex).text().trim();

        // Try to parse as numbers
        var aNum = parseFloat(aVal);
        var bNum = parseFloat(bVal);

        if (!isNaN(aNum) && !isNaN(bNum)) {
          // Numeric comparison
          if (sortDirection[column] === 'asc') {
            return aNum - bNum;
          } else {
            return bNum - aNum;
          }
        } else {
          // String comparison
          if (sortDirection[column] === 'asc') {
            return aVal.localeCompare(bVal);
          } else {
            return bVal.localeCompare(aVal);
          }
        }
      });

      // Re-append sorted rows
      $.each(rows, function(index, row) {
        $tbody.append(row);
      });

      // Update rank column
      $tbody.find('tr').each(function(index) {
        $(this).find('td').first().text(index + 1);
      });
    });
});
