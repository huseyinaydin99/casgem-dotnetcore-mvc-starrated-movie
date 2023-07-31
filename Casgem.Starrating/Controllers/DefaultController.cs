using Casgem.Ajax.DAL;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Casgem.Starrating.Controllers
{
    public class DefaultController : Controller
    {
        private readonly Context _context = new Context();

        [HttpGet]
        public IActionResult Index()
        {

            return View();
        }

        [HttpGet]
        public IActionResult MovieList()
        {
            var jsonCustomer = JsonConvert.SerializeObject(_context.Movies.ToList());
            return Json(jsonCustomer);
        }

        /*
        [HttpPost]
        public IActionResult AddMovie(Movie movie)
        {
            _context.Movies.Add(movie);
            _context.SaveChanges();
            var values = JsonConvert.SerializeObject(_context.Movies);
            return Json(values);
        }
        */

        [HttpPost]
        public IActionResult UpdateMovie(int id, byte rating)
        {
            var value = _context.Movies.Find(id);
            value.Rating = rating;
            _context.Movies.Update(value);
            _context.SaveChanges();
            return Json(value);
        }

    }
}
