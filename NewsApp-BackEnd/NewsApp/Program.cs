//using Microsoft.EntityFrameworkCore;
//using NewsApp.Models;

//var builder = WebApplication.CreateBuilder(args);

//// Add services to the container.
//builder.Services.AddControllers();
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

//// Configure the DbContext to use MySQL with Pomelo
//builder.Services.AddDbContext<DataAccessLayerDB>(options =>
//    options.UseMySql(builder.Configuration.GetConnectionString("MyConnection"),
//        new MySqlServerVersion(new Version(8, 0, 38)))); // Adjust version if needed

//var app = builder.Build();

//// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

//app.UseHttpsRedirection();

//app.UseAuthorization();

//app.MapControllers();

//app.Run();

using Microsoft.EntityFrameworkCore;
using NewsApp.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add CORS services
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

// Configure the DbContext to use MySQL with Pomelo
builder.Services.AddDbContext<DataAccessLayerDB>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("MyConnection"),
        new MySqlServerVersion(new Version(8, 0, 38)))); // Adjust version if needed

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Use CORS policy
app.UseCors("AllowAllOrigins");

app.UseAuthorization();

app.MapControllers();

app.Run();
