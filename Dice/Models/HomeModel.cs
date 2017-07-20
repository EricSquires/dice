using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dice.Models
{
    public class HomeModel
    {
        public IList<Die> Dice { get; } = new List<Die>();
    }
}
