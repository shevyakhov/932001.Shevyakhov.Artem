using lab13.Models;
using Microsoft.AspNetCore.Mvc;

namespace lab13.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        static readonly Model quiz = new Model();

        public IActionResult Quiz()
        {
            quiz.SetRandomValues();
            ViewBag.Question = quiz.question;
            return View();
        }

        public IActionResult Result()
        {
            ViewBag.RightAnswersCount = quiz.rightAnswersCount;
            ViewBag.AnswersCount = quiz.answersCount;
            ViewBag.Results = quiz.Results;
            return View();
        }

        [HttpPost]
        public IActionResult Next(int answer)
        {
            quiz.UpdateResults(answer);
            quiz.SetRandomValues();
            ViewBag.Question = quiz.question;
            return View("Quiz");
        }

        public IActionResult Finish(int answer)
        {
            quiz.UpdateResults(answer);
            ViewBag.RightAnswersCount = quiz.rightAnswersCount;
            ViewBag.AnswersCount = quiz.answersCount;
            ViewBag.Results = quiz.Results;
            return View("Result");
        }
    }
}
