using Microsoft.EntityFrameworkCore.Migrations;

namespace AOS.Domain.Migrations
{
    public partial class ID2Ekle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Arabalar",
                table: "Arabalar");

            migrationBuilder.AddColumn<int>(
                name: "ID2",
                table: "Arabalar",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Arabalar",
                table: "Arabalar",
                column: "ID2");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Arabalar",
                table: "Arabalar");

            migrationBuilder.DropColumn(
                name: "ID2",
                table: "Arabalar");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Arabalar",
                table: "Arabalar",
                column: "ID");
        }
    }
}
