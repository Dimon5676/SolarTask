using System;
using System.ComponentModel.DataAnnotations;

namespace SolarTask.Models
{
    public class Task
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string DeadLine { get; set; }
    }
}