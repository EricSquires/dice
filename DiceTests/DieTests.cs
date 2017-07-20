using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Dice.Models;

namespace DiceTests
{
    [TestClass]
    public class DieTests
    {
        [TestMethod]
        public void Roll()
        {
            var numFaces = 20;
            var minExpected = 1;
            var maxExpected = numFaces;

            var iterations = 1000;
            var die = new Die(numFaces);

            for (var i = 0; i < iterations; i++)
            {
                var roll = die.Roll();

                Assert.AreEqual(roll, die.Value, "Number returned by Roll and die's Value property should match");
                Assert.IsTrue(roll >= minExpected && roll <= maxExpected, $"Roll was {roll} and should fall between {minExpected} and {maxExpected} (inclusive)");
            }
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentOutOfRangeException))]
        public void NegativeNumberOfFaces()
        {
            var die = new Die(-1);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentOutOfRangeException))]
        public void ZeroFaces()
        {
            var die = new Die(0);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentOutOfRangeException))]
        public void OneFace()
        {
            var die = new Die(1);
        }

        [TestMethod]
        public void TwoFaces()
        {
            var die = new Die(2);
        }
    }
}
