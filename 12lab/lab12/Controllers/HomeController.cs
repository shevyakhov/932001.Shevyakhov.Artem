using lab12.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Diagnostics;
namespace lab12.Controllers
{
    public class HomeController : Controller
    {
     
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Manual()
        {
            if (Request.Method == "POST")
            {
                try
                {
                    var calculatorModel = new Model
                    {
                        num1 = Int32.Parse(HttpContext.Request.Form["num1"]),
                        operation = HttpContext.Request.Form["operation"],
                        num2 = Int32.Parse(HttpContext.Request.Form["num2"])
                    };

                    ViewData["Result"] = calculatorModel.Evaluate();
                }
                catch
                {
                    ViewData["Result"] = "Invalid input";
                }

                return View("Result");
            }
            return View("Calculator");
        }

        [HttpGet]
        [ActionName("ManualWithSeparateHandlers")]
        public IActionResult ManualWithSeparateHandlersGet()
        {
            return View("Calculator");
        }

        [HttpPost]
        [ActionName("ManualWithSeparateHandlers")]
        public IActionResult ManualWithSeparateHandlersPost()
        {
            try
            {
                var calculatorModel = new Model
                {
                    num1 = Int32.Parse(HttpContext.Request.Form["num1"]),
                    operation = HttpContext.Request.Form["operation"],
                    num2 = Int32.Parse(HttpContext.Request.Form["num2"])
                };

                ViewData["Result"] = calculatorModel.Evaluate();
            }
            catch
            {
                ViewData["Result"] = "Invalid input";
            }

            return View("Result");
        }

        [HttpGet]
        [ActionName("ModelBindingInParameters")]
        public IActionResult ModelBindingInParametersGet()
        {
            return View("Calculator");
        }

        [HttpPost]
        [ActionName("ModelBindingInParameters")]
        public IActionResult ModelBindingInParametersPost(int num1, string operation, int num2)
        {
            if (ModelState.IsValid)
            {
                var calculatorModel = new Model
                {
                    num1 = num1,
                    num2 = num2,
                    operation = operation
                };
                
                ViewData["Result"] = calculatorModel.Evaluate();
            }
            else
            {
                ViewData["Result"] = "Invalid input";
            }

            return View("Result");
        }

        [HttpGet]
        [ActionName("ModelBindingInSeparateModel")]
        public IActionResult ModelBindingInSeparateModelGet()
        {
            return View("Calculator");
        }

        [HttpPost]
        [ActionName("ModelBindingInSeparateModel")]
        public IActionResult ModelBindingInSeparateModelPost(Model model)
        {
            if (ModelState.IsValid)
            {
                ViewData["Result"] = model.Evaluate();
            }
            else
            {
                ViewData["Result"] = "Invalid input";
            }

            return View("Result");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
