using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dice.Models;

namespace Dice.Controllers
{
    public class HomeController : Controller
    {
        private readonly HomeModel model = new HomeModel();

        public HomeController()
        {
            model.Dice.Add(new Die(6));
            model.Dice.Add(new Die(12));
            model.Dice.Add(new Die(20));
        }

        public IActionResult Index()
        {
            return View(model);
        }

        public IActionResult Error()
        {
            return View(model);
        }

        public void Roll()
        {
            foreach (var die in model.Dice)
            {
                die.Roll();
            }
        }
    }
}
