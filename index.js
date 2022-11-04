const drivers = ['Boddy', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Boddy']

function findMatching(array, name) {
    return array.filter((x) => x.toLowerCase() === name.toLowerCase())
    }

    function fuzzyMatch(buzz, fast) {
        return buzz.filter(
        (maybeMatch) => maybeMatch.toLowerCase().indexOf(fast.toLowerCase()) === 0
        )
      }

      function matchName(buzz, fast) {
            return buzz.filter((z) => z.name === fast)
      }