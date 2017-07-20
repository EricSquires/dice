using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dice.Models
{
    public class Die
    {
        private static int NEXT_ID = 0;

        // There's several ways this could go - static to this class, global in some way, injected by IoC.
        // Leave it per-instance for now for simplicity
        private readonly Random RAND = new Random();

        // Even though this could be unsigned, leave it signed for easier arithmetic later
        public int NumFaces { get; }

        // The face that's currently "up"
        public int Value { get; private set; }

        public int Id { get; } = NEXT_ID++;

        public Die(int numFaces)
        {
            if (numFaces < 2)
            {
                throw new ArgumentOutOfRangeException("A Die cannot be created with fewer than 2 faces");
            }

            NumFaces = numFaces;
            Roll();
        }

        /// <summary>
        /// Rolls the die, setting its Value property to the value returned by this method.
        /// </summary>
        /// <returns>The new value of the die</returns>
        public int Roll()
        {
            Value = RAND.Next(NumFaces) + 1;

            return Value;
        }
    }
}
