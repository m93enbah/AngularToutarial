using DOMAIN.Context;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SharedComponents.Domain.Common;
using SharedComponents.Domain.Interfaces.Services;
using SharedComponents.Service.UnitOfWork;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.EntityFrameworkCore;
//using SharedComponents.Domain.Interfaces.Helper;
using System.Net;
using System.Net.Http;
using SharedComponents.Service.Services;
using SharedComponents.Domain.Interfaces.Helper;

namespace SharedComponents.Api
{
    public class Startup
    {
        public IHostingEnvironment Environment { get; set; }
        public IConfiguration Configuration { get; }
        public Startup(IHostingEnvironment env)
        {
            Environment = env;
            Configuration = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables()
                .Build();
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddCors();
            services.AddScoped<IServiceUnitOfWork, ServiceUnitOfWork>();
            services.AddScoped<ICoreService, CoreService>();
            var test = Configuration.GetConnectionString("SharedComponents");
            BaseConnection.ConnectionString = Configuration.GetConnectionString("SharedComponents");
            BaseConnection.SchemName = Configuration["SchemaName"];
            services.AddDbContext<SharedComponentsDBContext>(context => context.UseMySQL(BaseConnection.ConnectionString));
            services.AddMvc().AddJsonOptions(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
            // configure jwt middleware
            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear(); // => remove default claims
            services
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(cfg =>
                {
                    cfg.RequireHttpsMetadata = false;
                    cfg.SaveToken = true;
                    cfg.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidAudience = Configuration["JwtAudience"],
                        ValidIssuer = Configuration["JwtIssuer"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtKey"])),
                        ClockSkew = System.TimeSpan.Zero // remove delay of token when expire
                    };
                });

            services.AddHttpClient<IHelper, Helper>().ConfigurePrimaryHttpMessageHandler(() => new HttpClientHandler
            {
                AllowAutoRedirect = false,
                AutomaticDecompression = DecompressionMethods.Deflate | DecompressionMethods.GZip
            });
            services.AddHttpContextAccessor();
            services.Configure<SharedSettings>(Configuration.GetSection("SharedSettings"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }
            app.UseCors(x => x.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}