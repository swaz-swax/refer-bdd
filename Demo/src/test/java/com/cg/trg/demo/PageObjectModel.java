package com.cg.trg.demo;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class PageObjectModel 
{
 public static void main(String[] args) {
	

	System.setProperty("webdriver.gecko.driver","D:\\Swarup Talukdar\\Softwares\\geckodriver.exe");
	WebDriver driver=new FirefoxDriver();
	
/*		File pathToBinary = new File("C:/Program Files/Mozilla Firefox/firefox.exe");
	FirefoxProfile firefoxProfile = new FirefoxProfile();
	FirefoxBinary binary = new FirefoxBinary(pathToBinary);
			
	WebDriver driver = new FirefoxDriver(binary,firefoxProfile);
	*/
	driver.get("file:///D://Swarup Talukdar//Workspace//STS//Demo//src//test//java//resources//Bank.html");
	
	String parentWindow = driver.getWindowHandle().toString();
	
	driver.findElement(By.linkText("Create Account")).click();
	driver.switchTo().window("PopupWindow");
//	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	try {
		Thread.sleep(2000);
	} catch (InterruptedException e) {
		// TODO Auto-generated catch block
		e.getMessage();
	}
	driver.close();
	
	driver.switchTo().window(parentWindow);
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	//driver.close(); 
	/*@FindBy(how= How.NAME, using="fname")
	@CacheLookup
	WebElement fname;*/
}
}