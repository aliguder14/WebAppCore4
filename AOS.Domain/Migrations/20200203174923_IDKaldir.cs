using Microsoft.EntityFrameworkCore.Migrations;

namespace AOS.Domain.Migrations
{
    public partial class IDKaldir : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ID",
                table: "Arabalar");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ID",
                table: "Arabalar",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
