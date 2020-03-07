using Microsoft.EntityFrameworkCore.Migrations;

namespace AOS.Domain.Migrations
{
    public partial class IDKolonAdiDegistir : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Arabalar",
                table: "Arabalar");

            migrationBuilder.DropColumn(
                name: "ID2",
                table: "Arabalar");

            migrationBuilder.AddColumn<int>(
                name: "ID",
                table: "Arabalar",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Arabalar",
                table: "Arabalar",
                column: "ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Arabalar",
                table: "Arabalar");

            migrationBuilder.DropColumn(
                name: "ID",
                table: "Arabalar");

            migrationBuilder.AddColumn<int>(
                name: "ID2",
                table: "Arabalar",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Arabalar",
                table: "Arabalar",
                column: "ID2");
        }
    }
}
