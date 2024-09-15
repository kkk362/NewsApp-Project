using System.ComponentModel.DataAnnotations;

namespace NewsApp.Models
{
    public class News
    {
        [Key]
        public int id { get; set; }
        public string author { get; set; }
        public string category { get; set; }
        public System.DateTime date { get; set; }
        public string description { get; set; }
        public string subcategory { get; set; }
        public string title { get; set; }
    }
}