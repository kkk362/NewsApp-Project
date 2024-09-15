using Microsoft.EntityFrameworkCore;

namespace NewsApp.Models
{
    public class DataAccessLayerDB : DbContext
    {
        public DataAccessLayerDB(DbContextOptions<DataAccessLayerDB> options) : base(options)
        {
        }

        public DbSet<News> News { get; set; }

    }
}
