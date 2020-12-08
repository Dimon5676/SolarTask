using Microsoft.EntityFrameworkCore;

namespace SolarTask.Models
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options)
        {
            
        }
        
        public DbSet<Task> Task { get; set; }
    }

}