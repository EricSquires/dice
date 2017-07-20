using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Dice.Models;

namespace Dice.Controllers
{
    [Produces("application/json")]
    [Route("api/Roll")]
    public class RollController : Controller
    {
        private static IDictionary<int, Die> SUPPORTED_DICE = new Dictionary<int, Die>
        {
            { 6, new Die(6) }
        };

        // GET: api/Roll
        [HttpGet]
        public IEnumerable<int> Get()
        {
            return SUPPORTED_DICE.Keys;
        }

        // GET: api/Roll/5
        [HttpGet("{numFaces}", Name = "Get")]
        public int Get(int numFaces)
        {
            if (SUPPORTED_DICE.TryGetValue(numFaces, out Die die))
            {
                return die.Roll();
            }
            else
            {
                throw new ArgumentException($"{numFaces} is not a supported number of faces. Supported values are: {string.Join(", ", SUPPORTED_DICE.Keys)}");
            }
        }
    }
}
