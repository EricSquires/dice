using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dice.Models
{
    public class Die
    {
        // There's several ways this could go - static to this class, global in some way, injected by IoC.
        // Leave it per-instance for now for simplicity
        private readonly Random RAND = new Random();

        // Even though this could be unsigned, leave it signed for easier arithmetic later
        public int NumFaces { get; }

        public Die(int numFaces)
        {
            if (numFaces < 2)
            {
                throw new ArgumentOutOfRangeException("A Die cannot be created with fewer than 2 faces");
            }

            NumFaces = numFaces;
        }

        public int Roll()
        {
            return RAND.Next(NumFaces) + 1;
        }
    }
}
