using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SharedComponents.Api.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class LogInController : Controller
    {
        private readonly IConfiguration _configuration;

        public LogInController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("Login")]
        public object LoginAsync([FromBody] LoginDto model)
        {
            IdentityUser appUser = new IdentityUser();
            appUser.Id = model.CompanyID;
            appUser.UserName = model.UserName;
            var token = new
            {
               // idToken = GenerateJwtToken
                expiresIn = 50000
            };
            return token;
        }


        private object OK(object token)
        {
            throw new NotImplementedException();
        }

        private object GenerateJwtToken(IdentityUser appUser)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, appUser.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, appUser.Id),
                new Claim(ClaimTypes.Name, appUser.UserName)
            };
            if (appUser != null)
            {
                var expires = DateTime.Now.AddDays(Convert.ToDouble(_configuration["JwtExpireDays"]));

                var token = new JwtSecurityToken(
                    _configuration["JwtIssuer"],
                    _configuration["JwtAudience"],
                    claims,
                    expires: expires

                );

                var jwtHandler = new JwtSecurityTokenHandler();
                return jwtHandler.WriteToken(token);
            }
            else return false;
        }

        public class LoginDto
        {
            [Required]
            public string UserName { get; set; }
            [Required]
            public string CompanyID { get; set; }
        }

        public IActionResult Index()
        {
            return View();
        }

    }
}
