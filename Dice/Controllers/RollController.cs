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
        // GET: api/Roll/5
        [HttpGet("{numFaces}", Name = "Get")]
        public int Get(int numFaces)
        {
            return new Die(numFaces).Value;
        }
    }
}
